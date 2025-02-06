<?php

namespace App\Http\Controllers;

use App\Models\MedicalRecord;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMedicalRecordRequest;
use App\Http\Requests\UpdateMedicalRecordRequest;
use App\Models\Pet;
use Inertia\Inertia;

class MedicalRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Pet $pet)
    {
        return Inertia::render('MedicalRecords/Index', [
            'pet' => $pet->load('medicalRecords'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Pet $pet)
    {
        return Inertia::render('MedicalRecords/Create', [
            'pet' => $pet
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMedicalRecordRequest $request, Pet $pet)
    {
        $data = $request->all();
        $pet->medicalRecords()->create($data);

        return redirect()->route('pets.show', $pet)->with('success', 'Medical record created successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MedicalRecord $medical_record)
    {
        return Inertia::render('MedicalRecords/Edit', [
            'medicalRecord' => $medical_record->load('pet'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMedicalRecordRequest $request, MedicalRecord $medical_record)
    {
        $data = $request->all();
        $medical_record->update($data);

        return redirect()->route('pets.show', $medical_record->pet)->with('success', 'Medical record updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pet $pet, MedicalRecord $medicalRecord)
    {
        $medicalRecord->delete();

        return redirect()->back()->with('success', 'Medical record deleted successfully');
    }
}
