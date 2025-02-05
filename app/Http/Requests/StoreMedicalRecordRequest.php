<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreMedicalRecordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
<<<<<<< HEAD
<<<<<<< HEAD
            'date' => 'required|date|before_or_equal:now',
            'diagnosis' => 'required|string|max:255',
            'treatment' => 'required|string|max:255',
=======
            'date' => 'required|date|after_or_equal:now',
            'diagnosis' => 'nullable|string|max:255',
            'treatment' => 'nullable|string|max:255',
>>>>>>> ea141a087f18d2bf394396e77c67de22c7c9ca7f
=======
            'date' => 'required|date|after_or_equal:now',
            'diagnosis' => 'nullable|string|max:255',
            'treatment' => 'nullable|string|max:255',
>>>>>>> ea141a087f18d2bf394396e77c67de22c7c9ca7f
            'vet_id' => 'required|exists:users,id',
        ];
    }
}
