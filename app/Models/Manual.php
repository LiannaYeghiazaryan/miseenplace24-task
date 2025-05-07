<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manual extends Model
{
    use HasFactory;

    protected $fillable = [
        'sku',
        'title',
        'file_url',
    ];

    public function devices()
    {
        return $this->belongsToMany(Device::class, 'device_manual');
    }
}
