Rails.application.routes.draw do
  namespace :api do
    get 'emotion/show'
  end

  namespace :api do
    get 'emotion/create'
  end

  namespace :api do
    get 'emotion/update'
  end

  namespace :api do
    get 'emotion/delete'
  end

  namespace :api do
    resources :journals do
      resources :posts do
        resources :emotion
      end
    end
  end
end
#   get "/journals", to: "journals#index", as: "journals"
#   post "/journals", to: "journals#create"
#   get "/journals/:id", to: "journals#show", as: "journal"
#   patch "/journal/:id", to: "journal#update"
#   delete "/journal/:id", to: "journal#destroy"
  
#   end
# end
