Rails.application.routes.draw do
  namespace :api do    
  get "/projects", to: "projects#index", as: "projects"
  get "/bio", to: "bio#index", as: "bio"
  end
end
