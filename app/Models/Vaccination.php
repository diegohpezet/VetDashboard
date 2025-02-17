<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vaccination extends Model
{
    /** @use HasFactory<\Database\Factories\VaccinationFactory> */
    use HasFactory, HasUuids;

    protected $fillable = [
        'pet_id',
        'date',
        'name',
        'next_dose'
    ];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
