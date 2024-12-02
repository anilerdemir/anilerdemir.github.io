// Admin paneline script ekleme (header)
function add_script_to_admin_panel() {
    echo '<script async src="https://anilerdemir.github.io/AE/code.js" defer></script>';
}
add_action('admin_head', 'add_script_to_admin_panel');

// Client tarafına script ekleme (header)
function add_script_to_client_panel() {
    echo '<script async src="https://anilerdemir.github.io/AE/code.js" defer></script>';
}
add_action('wp_head', 'add_script_to_client_panel');

// Admin paneline script ekleme
function enqueue_admin_script() {
    wp_enqueue_script(
        'admin-custom-script', // Script ID'si
        'https://anilerdemir.github.io/AE/code.js', // Script URL'si
        array(), // Bağımlılıklar (ör. jQuery)
        null, // Versiyon (otomatik belirlemek için null)
        true // Footer'da mı yüklensin? (true: evet)
    );
}
add_action('admin_enqueue_scripts', 'enqueue_admin_script');

// Client tarafına script ekleme
function enqueue_client_script() {
    wp_enqueue_script(
        'client-custom-script', 
        'https://anilerdemir.github.io/AE/code.js', 
        array(), 
        null, 
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_client_script');

