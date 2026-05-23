from pathlib import Path

import fitz


PREVIEW_DIR = Path("assets/img/publication_preview")
TARGET_WIDTH = 4200


def render_preview(pdf_path: Path) -> bool:
    png_path = pdf_path.with_suffix(".png")
    if png_path.exists() and png_path.stat().st_mtime >= pdf_path.stat().st_mtime:
        return False

    with fitz.open(pdf_path) as doc:
        page = doc[0]
        zoom = TARGET_WIDTH / page.rect.width
        pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
        pix.save(png_path)

    return True


def main() -> None:
    rendered = []
    for pdf_path in sorted(PREVIEW_DIR.glob("*.pdf")):
        if render_preview(pdf_path):
            rendered.append(pdf_path.name)

    if rendered:
        print("Rendered publication previews: " + ", ".join(rendered))
    else:
        print("Publication previews are up to date.")


if __name__ == "__main__":
    main()
