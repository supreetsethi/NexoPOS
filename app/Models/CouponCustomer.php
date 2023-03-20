<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CouponCustomer extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table   =   'nexopos_' . 'coupons_customers';
    
    public function coupon()
    {
        return $this->belongsTo( Coupon::class );
    }

    public function customer()
    {
        return $this->hasOne( Customer::class );
    }
}