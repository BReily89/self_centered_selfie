Rails.application.routes.draw do
  namespace :api do
  get "/journals", to: "journals#index", as: "journals"
  post "/journals", to: "journals#create"
  get "/journals/:id", to: "journals#show", as: "journal"
  patch "/journal/:id", to: "journal#update"
  delete "/journal/:id", to: "journal#destroy"
  
  end
end
