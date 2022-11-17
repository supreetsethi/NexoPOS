<?php

namespace App\Models;

use App\Casts\DateCast;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property integer $user_id
 * @property string $slug
 * @property \Carbon\Carbon $updated_at
*/
class Media extends NsModel
{
    use HasFactory;

    protected $table = 'nexopos_medias';

    protected $casts = [
        'created_at' => DateCast::class,
    ];

    public function user()
    {
        return $this->belongsTo( User::class );
    }
}
