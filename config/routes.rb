Rails.application.routes.draw do
  namespace :api do    
  get "/projects", to: "projects#index", as: "projects"
  get "/bio", to: "bio#index", as: "bio"
  get "/contacts", to: "contacts#index", as: "contacts"
  end
end
