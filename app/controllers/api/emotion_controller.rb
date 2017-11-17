class Api::EmotionController < ApplicationController
  def show
    @emotions = Posts.find(params[:post_id])
    puts @emotions
    render json: @emotions
  end
  def show
    @emotion = Emotion.find(params[:id])
    render json: @emotion
  def create
    @post = Post.find(params[:post_id])
    @emotion = Emotion.new(emotion_params)

    @post.emotion << @emotion
    @post.save
    render json: @emotion
  end

  def update
    @emotion = Emotion.find(params[:id])
    @emotion.update!(emotion_params)
    render json: @emotion
  end

  def destroy
    @emotion = Emotion.find(params[:id]).destroy
    @emotion = Post.find(params[:post_id])
    puts @emotion
    render json: @emotion
  end
end
end
