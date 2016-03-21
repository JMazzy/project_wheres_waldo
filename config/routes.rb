Rails.application.routes.draw do
  root "photos#show"

  resources :characters, only: [:index]
  resources :photos, only: [:show]
  resources :tags, only: [:create]
end
