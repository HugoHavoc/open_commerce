<?php 

//Função de adicionar um css para o wordpress
// function handel_css(){
//     wp_register_style('imovel-style', get_template_directory_uri() . '/style.css', [],'1.0.0',false);
//     // wp_register_style('imovel-main', get_template_directory_uri() . '/assets/main.css', [],'1.0.0',false);
//     wp_enqueue_style('imovel-style');
// }
// add_action('wp_enqueue_scripts','imovel_css');


//Adicionando as função de menu
add_theme_support('menus');
//Registrando menu
function register_my_menu() {
    register_nav_menu('menu-principal',__( 'Menu Principal' ));
  }
  add_action( 'init', 'register_my_menu' );

  
//Adicionando imagem destaque nas páginas
add_theme_support('post-thumbnails');

//função que remove itens do painel wordpress admin
add_action( 'admin_init', 'remove_intes_do_painel' );
function remove_intes_do_painel() {
		remove_menu_page('tools.php'); //remove o item Ferramentas
		remove_menu_page('upload.php'); //remove o item Midia
		remove_menu_page('edit.php');//remove o item post
		remove_menu_page('edit-comments.php');//remove o item comentarios
		remove_post_type_support('page', 'editor');
	}//remove o item Midia




	if( function_exists('acf_add_options_page') ) {
		acf_add_options_page();
		acf_add_options_sub_page('Footer');
	}




?>