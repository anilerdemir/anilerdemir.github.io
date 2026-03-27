/* AEMANAGER - Merkezi Yönetim */
function ae_manager_enqueue_scripts() {
    $script_url = 'https://anilerdemir.github.io/AE/code.js';
    wp_enqueue_script(
        'ae-custom-script', 
        $script_url, 
        array(), 
        null, 
        array(
            'strategy'  => 'defer', 
            'in_footer' => true   
        )
    );
}
// Client
add_action('wp_enqueue_scripts', 'ae_manager_enqueue_scripts');
// Admin 
add_action('admin_enqueue_scripts', 'ae_manager_enqueue_scripts');
// Login
add_action('login_enqueue_scripts', 'ae_manager_enqueue_scripts');
