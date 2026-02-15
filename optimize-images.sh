#!/bin/bash

# Script na optimalizáciu obrázkov v BreakTime projekte
# Použitie: ./optimize-images.sh

echo "🖼️  Optimalizácia obrázkov pre BreakTime..."

# Skontroluj či je nainštalovaný sharp-cli
if ! command -v sharp &> /dev/null; then
    echo "📦 Inštalujem sharp-cli..."
    npm install -g sharp-cli
fi

# Vytvor backup adresáre
echo "💾 Vytváram zálohu..."
mkdir -p public/assets/backup/gallery
mkdir -p public/assets/backup/catering
mkdir -p public/assets/backup/team

# Backup galérie
cp public/assets/gallery/*.jpg public/assets/backup/gallery/ 2>/dev/null || true

# Backup catering
cp public/assets/catering/*.jpg public/assets/backup/catering/ 2>/dev/null || true

# Backup team
cp public/assets/team/*.jpg public/assets/backup/team/ 2>/dev/null || true

# Optimalizuj gallery obrázky
echo "⚡ Optimalizujem gallery obrázky..."
for file in public/assets/gallery/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "  Spracovávam: $filename"
        sharp -i "$file" -o "$file" --jpeg '{"quality": 82, "mozjpeg": true}'
        sharp -i "$file" -o "public/assets/gallery/${filename%.jpg}.webp" --webp '{"quality": 82}'
    fi
done

# Optimalizuj catering obrázky
echo "⚡ Optimalizujem catering obrázky..."
for file in public/assets/catering/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "  Spracovávam: $filename"
        sharp -i "$file" -o "$file" --jpeg '{"quality": 82, "mozjpeg": true}'
        sharp -i "$file" -o "public/assets/catering/${filename%.jpg}.webp" --webp '{"quality": 82}'
    fi
done

# Optimalizuj team obrázky (vyššia kvalita pre portréty)
echo "⚡ Optimalizujem team obrázky..."
for file in public/assets/team/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "  Spracovávam: $filename"
        sharp -i "$file" -o "$file" --jpeg '{"quality": 88, "mozjpeg": true}'
        sharp -i "$file" -o "public/assets/team/${filename%.jpg}.webp" --webp '{"quality": 88}'
    fi
done

# Optimalizuj hlavný obrázok
if [ -f "public/assets/main.jpg" ]; then
    echo "⚡ Optimalizujem main.jpg..."
    cp public/assets/main.jpg public/assets/backup/main.jpg
    sharp -i public/assets/main.jpg -o public/assets/main.jpg --jpeg '{"quality": 85, "mozjpeg": true}'
    sharp -i public/assets/main.jpg -o public/assets/main.webp --webp '{"quality": 85}'
fi

# Zisťovanie veľkostí
echo ""
echo "📊 Štatistiky:"
echo "Gallery:"
echo "  JPEG: $(du -ch public/assets/gallery/*.jpg 2>/dev/null | tail -1 | awk '{print $1}')"
echo "  WebP: $(du -ch public/assets/gallery/*.webp 2>/dev/null | tail -1 | awk '{print $1}')"
echo "Catering:"
echo "  JPEG: $(du -ch public/assets/catering/*.jpg 2>/dev/null | tail -1 | awk '{print $1}')"
echo "  WebP: $(du -ch public/assets/catering/*.webp 2>/dev/null | tail -1 | awk '{print $1}')"
echo "Team:"
echo "  JPEG: $(du -ch public/assets/team/*.jpg 2>/dev/null | tail -1 | awk '{print $1}')"
echo "  WebP: $(du -ch public/assets/team/*.webp 2>/dev/null | tail -1 | awk '{print $1}')"

echo ""
echo "✅ Hotovo!"
echo "💡 Backup je v public/assets/backup/"
echo "💡 Pre použitie WebP aktualizuj HTML/TS súbory"
