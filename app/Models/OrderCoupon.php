<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property integer $id
 * @property string $uuid
 * @property integer $author
 * @property float $value
 * @property \Carbon\Carbon $updated_at
*/
class OrderCoupon extends NsModel
{
    use HasFactory;

    protected $table = 'nexopos_' . 'orders_coupons';

    public function customerCoupon()
    {
        return $this->belongsTo( CustomerCoupon::class, 'customer_coupon_id' );
    }
}
