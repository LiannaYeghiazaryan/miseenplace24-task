<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'sku',
        'serial_number',
        'address',
        'order_number',
        'warranty_months',
        'warranty_text',
        'delivery_date',
    ];

    public function errorReports()
    {
        return $this->hasMany(ErrorReport::class);
    }

    public function engineeringNotes()
    {
        return $this->hasMany(EngineeringNote::class);
    }

    public function manuals()
    {
        return $this->belongsToMany(Manual::class, 'device_manual');
    }
}
