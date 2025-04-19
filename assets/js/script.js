// Acesso a dispositivos moveis
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
    document.body.innerHTML = `
        <div class="flex items-center justify-center min-h-screen bg-[#3233232]">
        <div class="text-center p-4">
            <h1 class="text-2xl font-bold text-[#AAAAAA] mb-4">Acesso Restrito</h1>
            <p class="text-[#AAAAAA]">Este site está disponível apenas para dispositivos móveis.</p>
        </div>
        </div>`;
}
