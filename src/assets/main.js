const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCi_avIVd9k7dsOI094et9yw&part=snippet%2Cid&order=date&maxResults=4';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2e16686fddmsh48bbcb440d48f6cp19ad3ejsne6c29dc71096',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
async function fetchData(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}

(async () => {
    try {
        const videos = await fetchData(url);
        console.log(videos.items);

        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>
        `).join('')}`;

        content.innerHTML = view;

    } catch (error) {
        console.error(error);
    }
})();

