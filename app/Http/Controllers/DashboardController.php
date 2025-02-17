<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\MedicalRecord;
use App\Models\Pet;
use App\Models\Owner;
use App\Models\Vaccination;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
  public function index()
  {
    $todayAppointments = Appointment::with('pet.owner')
      ->whereDate('date', now()->format('Y-m-d'))->get();

    return Inertia::render('Dashboard', [
      'appointments' => $todayAppointments,
      'stats' => [
        'appointments' => [
          'cancelled' => Appointment::where('status', 'cancelled')->count(),
          'completed' => Appointment::where('status', 'completed')->count(),
          'scheduled' => Appointment::where('status', 'scheduled')->count(),
        ]
      ]
    ]);
  }
}
