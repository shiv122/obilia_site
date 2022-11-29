<?php

namespace App\Action\ServiceProvider;

use Illuminate\Http\Request;
use App\Managers\FileManager;
use Illuminate\Validation\ValidationException;

class JobAction
{
    use FileManager;


    public function Apply(Request $request): void
    {
        $user = auth()->user();

        $already_applied = $user->job_applications()->where('job_id', $request->id)->exists();

        if ($already_applied) {
            throw ValidationException::withMessages([
                'id' => 'You have already applied for this job.',
            ]);
        }

        $proposal = $user->job_applications()->create([
            'job_id' => $request->id,
            'bid_price' => $request->price,
            'work_letter' => $request->work_letter,
            'document' => ($request->hasFile('additional_document')) ? $this->uploadFileToDO($request->file('additional_document'), 'docs/job-proposal', 'proposals', 'doc') : null,
        ]);
    }
}
