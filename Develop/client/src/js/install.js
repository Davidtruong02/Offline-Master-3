const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // Stash the event so it can be triggered later.
    const installPromptEvent = event;
    // Show the install button
    butInstall.classList.toggle('hidden', false);
    
    butInstall.addEventListener('click', async () => {
        // Show the install prompt
        installPromptEvent.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await installPromptEvent.userChoice;
        // Hide the install button
        butInstall.classList.toggle('hidden', true);
    });

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show the install prompt
    promptEvent.prompt();
    // Wait for the user to respond to the prompt
    window.deferredPrompt = null;
    // Hide the install button
    butInstall.classList.toggle('hidden', true);
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clear the deferredPrompt
    window.deferredPrompt = null;
    // Log the installation to the analytics
    console.log('PWA was installed');
});
