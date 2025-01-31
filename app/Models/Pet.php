<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    /** @use HasFactory<\Database\Factories\PetFactory> */
    use HasUuids, HasFactory;

    protected $fillable = [
        'name',
        'species',
        'breed',
        'sex',
        'stage',
        'characteristics',
        'owner_id'
    ];
}
