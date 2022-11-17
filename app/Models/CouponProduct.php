<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property integer $id
 * @property integer $product_id
*/
class CouponProduct extends NsModel
{
    use HasFactory;

    protected $table = 'nexopos_' . 'coupons_products';

    public $timestamps = false;

    public function coupon()
    {
        return $this->belongsTo( Coupon::class );
    }

    public function product()
    {
        return $this->belongsTo( Product::class, 'product_id' );
    }
}
