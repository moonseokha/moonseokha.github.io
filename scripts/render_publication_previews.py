from pathlib import Path

import fitz


PREVIEW_DIR = Path("assets/img/publication_preview")
ZOOM_DIR = Path("assets/publication_preview_zoom")
TARGET_WIDTH = 4200
ZOOM_TARGET_WIDTH = 8400


def render_preview(pdf_path: Path, output_path: Path, target_width: int) -> bool:
    png_path = output_path
    if png_path.exists() and png_path.stat().st_mtime >= pdf_path.stat().st_mtime:
        return False

    with fitz.open(pdf_path) as doc:
        page = doc[0]
        zoom = target_width / page.rect.width
        pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
        pix.save(png_path)

    return True


def main() -> None:
    ZOOM_DIR.mkdir(parents=True, exist_ok=True)
    rendered = []
    for pdf_path in sorted(PREVIEW_DIR.glob("*.pdf")):
        thumbnail_path = pdf_path.with_suffix(".png")
        zoom_path = ZOOM_DIR / f"{pdf_path.stem}-zoom.png"
        changed = render_preview(pdf_path, thumbnail_path, TARGET_WIDTH)
        changed = render_preview(pdf_path, zoom_path, ZOOM_TARGET_WIDTH) or changed
        if changed:
            rendered.append(pdf_path.name)

    if rendered:
        print("Rendered publication previews: " + ", ".join(rendered))
    else:
        print("Publication previews are up to date.")


if __name__ == "__main__":
    main()
