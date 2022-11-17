<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property integer $id
 * @property integer $author
 * @property string $uuid
 * @property \Carbon\Carbon $updated_at
*/
class OrderShippingAddress extends NsModel
{
    use HasFactory;

    protected $table = 'nexopos_' . 'orders_addresses';

    protected static function booted()
    {
        static::addGlobalScope( 'type', function( Builder $builder ) {
            $builder->where( 'type', 'shipping' );
        });

        static::creating( function( $address ) {
            $address->type = 'shipping';
        });

        static::updating( function( $address ) {
            $address->type = 'shipping';
        });
    }
}
