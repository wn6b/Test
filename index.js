<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>Zaid's Hentai Kingdom</title>
    <style>
        body { background: #050505; color: #eee; font-family: 'Cairo', sans-serif; margin: 0; }
        .header { padding: 20px; border-bottom: 2px solid #ff004c; text-align: center; background: #000; box-shadow: 0 0 20px #ff004c; }
        .video-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); padding: 20px; gap: 20px; }
        .video-card { background: #111; border-radius: 10px; overflow: hidden; transition: 0.4s; position: relative; }
        .video-card:hover { transform: translateY(-10px); box-shadow: 0 10px 30px #ff004c66; }
        .video-card img { width: 100%; height: 180px; object-fit: cover; }
        .play-btn { position: absolute; top: 35%; left: 42%; font-size: 3rem; color: #ff004c; opacity: 0.8; }
        .info { padding: 10px; font-weight: bold; }
        .duration { font-size: 0.8rem; color: #ff004c; }
    </style>
</head>
<body>

    <div class="header">
        <h1>🔞 HENTAI WORLD - سيدي زيد 🔞</h1>
        <p>أفخم فيديوهات الهنتاي والأنمي الفاجر بدقائق كاملة</p>
    </div>

    <div class="video-container" id="hentaiGrid"></div>

    <script>
        // مصفوفة الفيديوهات (تقدر تضيف قد ما تريد يا نغل)
        const hentaiList = [
            { title: "Sexy Succubus Attack", duration: "12:45", thumb: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=400" },
            { title: "Anime Maid Service", duration: "08:20", thumb: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400" },
            { title: "High School Overflow", duration: "15:10", thumb: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400" },
            { title: "Tentacle Invasion v3", duration: "22:00", thumb: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" }
        ];

        const grid = document.getElementById('hentaiGrid');

        hentaiList.forEach(vid => {
            grid.innerHTML += `
                <div class="video-card" onclick="playVideo('${vid.title}')">
                    <img src="${vid.thumb}" alt="Thumb">
                    <div class="play-btn">▶</div>
                    <div class="info">
                        ${vid.title} <br>
                        <span class="duration">المدة: ${vid.duration}</span>
                    </div>
                </div>
            `;
        });

        function playVideo(name) {
            alert("سيدي زيد.. الفيديو '" + name + "' جاهز للعرض بجودة 4K في 'محراب الهنتاي' الخاص بيك!");
            // هنا تربط المشغل الحقيقي (Video Player)
        }
    </script>
</body>
</html>
  