<?php
/**
 * Register a book post type, with REST API support
 *
 * Based on example at: https://codex.wordpress.org/Function_Reference/register_post_type
 */
add_action('init', 'my_book_cpt');
function my_book_cpt()
{
    $args = array(
        'public' => true,
        'show_in_rest' => true,
        'label' => 'Books',
    );
    register_post_type('book', $args);
}

/**
 * Register a genre post type, with REST API support
 *
 * Based on example at: https://codex.wordpress.org/Function_Reference/register_taxonomy
 */
add_action('init', 'my_book_taxonomy', 30);
function my_book_taxonomy()
{

    $labels = array(
        'name' => _x('Genres', 'taxonomy general name'),
        'singular_name' => _x('Genre', 'taxonomy singular name'),
        'search_items' => __('Search Genres'),
        'all_items' => __('All Genres'),
        'parent_item' => __('Parent Genre'),
        'parent_item_colon' => __('Parent Genre:'),
        'edit_item' => __('Edit Genre'),
        'update_item' => __('Update Genre'),
        'add_new_item' => __('Add New Genre'),
        'new_item_name' => __('New Genre Name'),
        'menu_name' => __('Genre'),
    );

    $args = array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'genre'),
        'show_in_rest' => true,
        'rest_base' => 'genre',
        'rest_controller_class' => 'WP_REST_Terms_Controller',
    );

    register_taxonomy('genre', array('book'), $args);

}

/**
 * Add REST API support to an already registered post type.
 */
add_filter('register_post_type_args', 'my_post_type_args', 10, 2);

function my_post_type_args($args, $post_type)
{

    if ('book' === $post_type) {
        $args['show_in_rest'] = true;

        // Optionally customize the rest_base or rest_controller_class
        $args['rest_base'] = 'books';
        $args['rest_controller_class'] = 'WP_REST_Posts_Controller';
    }

    return $args;
}

/**
 * Add REST API support to an already registered taxonomy.
 */
add_filter('register_taxonomy_args', 'my_taxonomy_args', 10, 2);

function my_taxonomy_args($args, $taxonomy_name)
{

    if ('genre' === $taxonomy_name) {
        $args['show_in_rest'] = true;

        // Optionally customize the rest_base or rest_controller_class
        $args['rest_base'] = 'genres';
        $args['rest_controller_class'] = 'WP_REST_Terms_Controller';
    }

    return $args;
}
