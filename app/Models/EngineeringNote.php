<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EngineeringNote extends Model
{
    use HasFactory;

    protected $fillable = [
        'device_id',
        'company_name',
        'technician_name',
        'notes',
        'issue_summary',
        'attachment_path',
        'recorded_at',
    ];

    protected $casts = [
        'recorded_at' => 'datetime',
    ];

    public function device()
    {
        return $this->belongsTo(Device::class);
    }
}
