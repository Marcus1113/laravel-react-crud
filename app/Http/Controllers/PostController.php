<?php

namespace App\Http\Controllers;

use App\Http\Resources\Post as PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResource::collection(Post::all());
    }


    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required',
        ]);

        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();


        return response()->json(['data'=>"Post Created"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $Post = new PostResource(Post::findOrFail($id));

        return $Post;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       $request->validate([
            'title'=>'required',
            'description'=>'required',
        ]);

        $post = Post::findOrFail($id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();
        

        return response()->json(['data'=>"Post updated!"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json(['data'=>"Post deleted!"]);
    }
}
