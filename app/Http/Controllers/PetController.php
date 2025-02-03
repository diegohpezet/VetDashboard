<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePetRequest;
use App\Http\Requests\UpdatePetRequest;
use App\Models\Owner;
use App\Models\Pet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $pets = Pet::with('owner')
            ->where('name', 'like', "%{$search}%")
            ->orderBy('name', 'asc')
            ->paginate(10)
            ->appends(['search' => $search]);

        return Inertia::render('Pets/Index', [
            'pets' => $pets,
            'search' => $search
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pets/Create', [
            'owners' => Owner::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePetRequest $request)
    {
        Pet::create($request->all());

        return redirect()->route('pets.index')->with('status', 'Pet created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pet $pet)
    {
        return Inertia::render('Pets/Show', [
            'pet' => $pet->load(['owner', 'appointments'])
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pet $pet)
    {
        return Inertia::render('Pets/Edit', [
            'pet' => $pet->load('owner'),
            'owners' => Owner::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePetRequest $request, Pet $pet)
    {
        $pet->update($request->all());

        return redirect()->route('pets.index')->with('status', 'Pet updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pet $pet)
    {
        $pet->delete();

        return redirect()->route('pets.index')->with('status', 'Pet deleted successfully');
    }
}
