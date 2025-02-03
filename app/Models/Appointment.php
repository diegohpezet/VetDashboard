<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    /** @use HasFactory<\Database\Factories\AppointmentFactory> */
    use HasUuids, HasFactory;

    protected $fillable = [
        'pet_id',
        'date',
        'reason',
        'status'
    ];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
