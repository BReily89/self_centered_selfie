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
  end

  def update
  end

  def delete
  end
end
end
