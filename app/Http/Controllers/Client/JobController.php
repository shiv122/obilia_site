<?php

namespace App\Http\Controllers\Client;

use App\Models\Skill;
use App\Models\Category;
use App\Models\WorkLength;
use Illuminate\Http\Request;
use App\Managers\FileManager;
use App\Models\ExperienceLevel;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Action\Client\ClientJobAction;
use Illuminate\Support\Facades\Storage;

class JobController extends Controller
{
    use FileManager;
    public function index()
    {

        return view('dashboard.client.jobs');
    }


    public function add()
    {

        $categories = Category::active()->get()->toArray();
        $skills = Skill::active()->get()->toArray();
        $experience_levels = ExperienceLevel::active()->get()->toArray();
        $length = WorkLength::active()->get()->toArray();
        return view('dashboard.client.add-job', compact('categories', 'skills', 'experience_levels', 'length'));
    }


    public function store(Request $request, ClientJobAction $action)
    {

        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|integer|exists:sub_categories,id',
            'description' => 'required|string|max:500',
            'experience' => 'required|integer|exists:experience_levels,id',
            'skills' => 'required|json',
            'project_length' => 'required|integer|exists:work_lengths,id',
            'project_size' => 'required|in:small,medium,large',
            'payment_type' => 'required|in:fixed,hourly',
            'budget_from' => 'required|integer',
            'budget_to' => 'required|integer|gte:budget_from',
            'total_hours' => 'nullable|integer',
            'banner' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:100',
            'responsibilities' => 'required|array',
            'responsibilities.*' => 'required|string|max:1000',

        ]);


        $user = auth()->user();
        $action->jobStoreAction($request, $user);
        return response()->json([
            'message' => 'Job created successfully'
        ]);
    }


    public function show($slug)
    {
        $user = auth()->user();

        $job = $user->posted_jobs()->where('slug', $slug)
            ->with([
                'sub_category', 'experience', 'work_length', 'skills' => ['skill'], 'responsibilities',
            ])
            ->withCount(['applications'])
            ->firstOrFail();
        return view('dashboard.client.job-details', compact('job'));
    }
}
