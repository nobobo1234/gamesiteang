<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit99efbbcee33d48b836adeb793b1edd84
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Klein\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Klein\\' => 
        array (
            0 => __DIR__ . '/..' . '/klein/klein/src/Klein',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit99efbbcee33d48b836adeb793b1edd84::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit99efbbcee33d48b836adeb793b1edd84::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
