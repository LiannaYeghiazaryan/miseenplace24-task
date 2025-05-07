<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceManual extends Model
{
    use HasFactory;

    protected $table = 'device_manual';
    public $timestamps = false;

    protected $fillable = [
        'device_id',
        'manual_id',
    ];
}
