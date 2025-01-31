<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOwnerRequest;
use App\Http\Requests\UpdateOwnerRequest;
use App\Models\Owner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OwnerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $owners = Owner::where('name', 'like', "%{$search}%")
            ->orderBy('name', 'asc')
            ->paginate(10)
            ->appends(['search' => $search]);

        return Inertia::render('Owners/Index', [
            'owners' => $owners,
            'search' => $search
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Owners/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOwnerRequest $request)
    {
        Owner::create($request->all());

        return redirect()->route('owners.index')->with('status', 'Owner created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Owner $owner)
    {
        return Inertia::render('Owners/Show', [
            'owner' => $owner
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Owner $owner)
    {
        return Inertia::render('Owners/Edit', [
            'owner' => $owner
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOwnerRequest $request, Owner $owner)
    {
        $owner->update($request->all());

        return redirect()->route('owners.show', $owner)->with('status', 'Owner updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Owner $owner)
    {
        $owner->delete();

        return redirect()->route('owners.index')->with('status', 'Owner deleted successfully');
    }
}
