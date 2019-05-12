<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'biblioteca');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'biblioteca-mysql');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', ';tld4Q8e*qgXV|>|vg#Y{,tY8Ky2`Ue2Wr^xBW)LP~%8,Yge*ttr e-*0evsRFAv');
define('SECURE_AUTH_KEY', '.freHYefOkz#K,/]sfS58oh?-Gt:Wz+(V/9}ST%26XNR4{WB`+%-=6T&xUTavuWj');
define('LOGGED_IN_KEY', 'e/]V<UClBujT|@[4asDy>iDw<[oB0xQ+KP$5p)W#t*u`53?r``WYX2C/4yXp%)}Z');
define('NONCE_KEY', 'wD`FSBjm(~u2Y=t+=mQ7$|DpU8X|<acdY>H-is<^`ShQARqB}xtJ1[Um/w4|gJ[+');
define('AUTH_SALT', 'HNyCmhd|ryO^g[k|o<&X6T^|d8z{^!/$[10w+~$K~ee>Q2z1X-es9].$xtg*G<6l');
define('SECURE_AUTH_SALT', 'D7.[bg-:Y=nngA9dc%PJ{Y^=$`PMw6f]09P(.Vu9|!6iv1e]kT=`$l_?-9pyJ2Ea');
define('LOGGED_IN_SALT', '<X;JtX-@}}-&: CBT8_O?:@av(Q82e0+t]7+y6T6jpIlR`;P#_3IKe1|<Be{NyzX');
define('NONCE_SALT', '= Za4=VVJP~_nVqGZx5]*xuJ-2Id%/,.hC-Zd4PD|+LDY#4_+|%ZfS>Y|WXey3uQ');


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
