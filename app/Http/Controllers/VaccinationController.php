<?php

namespace App\Http\Controllers;

use App\Models\Vaccination;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVaccinationRequest;
use App\Http\Requests\UpdateVaccinationRequest;
use App\Models\Pet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VaccinationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, Pet $pet)
    {
        $search = $request->input('search');

        $vaccinations = Vaccination::where('pet_id', $pet->id)
            ->where('name', 'like', "%{$search}%")
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->appends(['search' => $search]);

        return Inertia::render('Vaccinations/Index', [
            'vaccinations' => $vaccinations,
            'pet' => $pet,
            'search' => $search
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Pet $pet)
    {
        return Inertia::render('Vaccinations/Create', [
            'pet' => $pet
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVaccinationRequest $request, Pet $pet)
    {
        $data = $request->all();
        $pet->vaccinations()->create($data);

        return redirect()->route('pets.show', $pet)->with('success', 'Vaccination created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Vaccination $vaccination)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vaccination $vaccination)
    {
        return Inertia::render('Vaccinations/Edit', [
            'vaccination' => $vaccination->load('pet')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVaccinationRequest $request, Vaccination $vaccination)
    {
        $data = $request->all();
        $vaccination->update($data);

        return redirect()->route('pets.show', $vaccination->pet)->with('success', 'Vaccination updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vaccination $vaccination)
    {
        $vaccination->delete();

        return redirect()->route('pets.show', $vaccination->pet)->with('success', 'Vaccination deleted successfully');
    }
}
