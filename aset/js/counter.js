// Counter menggunakan CountAPI
const NAMESPACE = 'tansa-studio';
const KEY_SITE = 'visits';

function updateCounter() {
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY_SITE}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('visitor-counter').innerText = data.value;
        })
        .catch(() => {
            document.getElementById('visitor-counter').innerText = '---';
        });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCounter);
} else {
    updateCounter();
}
