<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesPage extends Model
{
    protected $fillable = [
        'product_id',
        'user_id',
        'headline',
        'content',
        'theme',
    ];

    protected $casts = [
        'content' => 'array',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
