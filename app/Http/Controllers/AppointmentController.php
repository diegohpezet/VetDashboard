<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAppointmentRequest;
use App\Http\Requests\UpdateAppointmentRequest;
use App\Models\Appointment;
use App\Models\Owner;
use App\Models\Pet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $appointments = Appointment::with('pet.owner')
            ->whereHas('pet', function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->appends(['search' => $search]);

        return Inertia::render('Appointments/Index', [
            'appointments' => $appointments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Appointments/Create', [
            'owners' => Owner::all(),
            'pets' => Pet::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAppointmentRequest $request)
    {
        Appointment::create($request->all());

        return redirect()->route('appointments.index')->with('status', 'Appointment created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        return Inertia::render('Appointments/Show', [
            'appointment' => $appointment,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment $appointment)
    {
        return Inertia::render('Appointments/Edit', [
            'appointment' => $appointment,
            'owners' => Owner::all(),
            'pets' => Pet::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAppointmentRequest $request, Appointment $appointment)
    {
        $appointment->update($request->all());

        return redirect()->route('appointments.show', $appointment)->with('status', 'Appointment updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        $appointment->delete();

        return redirect()->route('appointments.index')->with('status', 'Appointment deleted successfully');
    }
}
