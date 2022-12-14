<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function participants()
    {
        return $this->hasMany(ChatParticipant::class);
    }

    public function participant()
    {
        return $this->hasOne(ChatParticipant::class)
            ->where('user_id', '!=', auth()->id());
    }

    public function job()
    {
        return $this->belongsTo(Job::class);
    }


    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
