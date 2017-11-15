class Api::PostsController < ApplicationController
    def index
        @posts = Journal.find(params[:journal_id]).posts.reverse
        puts @posts
        render json: @posts
    end
    def show
        @post = Post.find(params[:id])
        render json: @post
    end
    def create 
        @journal = Journal.find(params[:journal_id])
        @post = Post.new(post_params)
        
        @journal.posts << @post
        @journal.save!
        render json: @post
    end
    def update
        @post = Post.find(params[:id])
        @post.update!(post_params)
        render json: @post
    end
    def destroy 
        @post = Post.find(params[:id]).delete
        render status: :ok
    end
    private
    def post_params
        params.require(:post).permit(:title, :content, :photo_url)
    end
end
