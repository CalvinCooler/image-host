 // JavaScript for rain effect
        const canvas = document.getElementById('rainCanvas');
        const ctx = canvas.getContext('2d');

        // Set canvas size to match the window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Generate random raindrops with color #0008fa
        const raindrops = [];
        for (let i = 0; i < 300; i++) { // Increased the number of raindrops
            raindrops.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 1, // Randomize raindrop radius
                speed: Math.random() * 5 + 2
            });
        }

        function drawRain() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const drop of raindrops) {
                ctx.beginPath();
                ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2); // Use arc to draw raindrops as dots
                ctx.fillStyle = '#1e58bc'; // Set raindrop color to #0008fa
                ctx.fill();
                ctx.shadowBlur = 20; // Increase shadow blur for a more pronounced effect
                ctx.shadowColor = '#1e58bc'; // Set shadow color to match raindrop color

                drop.y += drop.speed;

                if (drop.y > canvas.height) {
                    drop.y = 0;
                }
            }

            requestAnimationFrame(drawRain);
        }

        drawRain();

        // Resize canvas when the window is resized
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
