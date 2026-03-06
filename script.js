
        // Variables
        let musicPlaying = false;
        const music = document.getElementById('bgMusic');
        const musicIcon = document.getElementById('musicIcon');
        const musicControl = document.getElementById('musicControl');

        // Función para entrar al sitio
        function enterSite() {
            document.getElementById('landingPage').classList.add('hidden');
            document.getElementById('mainContent').classList.add('visible');
            document.getElementById('musicControl').style.display = 'flex';
            createHearts();
            startCounter();

            // ✅ Música arranca aquí, dentro del clic del botón
            const music = document.getElementById('bgMusic');
            music.play().then(() => {
                musicPlaying = true;
                document.getElementById('musicIcon').textContent = '🔊';
            }).catch((e) => {
                console.log('Error al reproducir música:', e);
            });
        }

        // Control de música
        function toggleMusic() {
            if (musicPlaying) {
                music.pause();
                musicIcon.textContent = '🔇';
                musicPlaying = false;
            } else {
                music.play();
                musicIcon.textContent = '🔊';
                musicPlaying = true;
            }
        }

        // Crear corazones flotantes
        function createHearts() {
            setInterval(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.textContent = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 6000);
            }, 2000);
        }

        // Contador de días
        function startCounter() {
            const startDate = new Date(); // Puedes cambiar esta fecha
            startDate.setDate(startDate.getDate() - 7); // Hace 7 días
            
            function updateCounter() {
                const now = new Date();
                const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
                document.getElementById('daysCounter').textContent = diff;
            }
            
            updateCounter();
            setInterval(updateCounter, 1000 * 60 * 60); // Actualiza cada hora
        }

        // Funciones para abrir y cerrar modales
        function openModal(number) {
            document.getElementById('modal' + number).classList.add('active');
            document.body.style.overflow = 'hidden'; // Previene scroll del fondo
        }

        function closeModal(number) {
            document.getElementById('modal' + number).classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaura scroll
        }

        // Cerrar modal con tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                for (let i = 1; i <= 4; i++) {
                    closeModal(i);
                }
            }
        });