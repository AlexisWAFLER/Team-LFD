        // Votre clé API YouTube
        const apiKey = 'API_KEY';

        // ID de la chaîne YouTube
        const channelId = 'UCfPUe_GHMToD-0CAWYSSX1w';

        // Fonction pour récupérer les 6 dernières vidéos de la chaîne
        async function fetchLatestVideos() {
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=6&order=date&type=video&key=${apiKey}`;
            
            const response = await fetch(url);
            const data = await response.json();

            // Extraire les vidéos de la réponse
            const videos = data.items;

            // Afficher les miniatures cliquables sur le site web
            const videoContainer = document.getElementById('videoContainer');
            videoContainer.innerHTML = '';

            videos.forEach(video => {
                const videoId = video.id.videoId;
                const videoThumbnail = video.snippet.thumbnails.medium.url;

                // Créer un élément de lien pour la vidéo
                const linkElement = document.createElement('a');
                linkElement.href = `https://www.youtube.com/watch?v=${videoId}`;
                linkElement.target = '_blank'; // Ouvrir le lien dans un nouvel onglet

                // Créer un élément d'image pour la miniature
                const imgElement = document.createElement('img');
                imgElement.src = videoThumbnail;
                imgElement.alt = video.snippet.title;

                // Ajouter l'image au lien
                linkElement.appendChild(imgElement);
                                // Ajouter le lien à l'élément du conteneur
                                videoContainer.appendChild(linkElement);
            });
        }

        // Appeler la fonction pour charger les vidéos
        window.onload = fetchLatestVideos;