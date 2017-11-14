class Api::PostsController < ApplicationController
    def index
        @posts = Journal.find(params[:journal_id]).post.reverse
        render json: @posts
    end
    def show
        @post = Post.find(params[:id])
        render json: @post
    end
end
