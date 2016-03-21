Rails.application.routes.draw do
  root "photos#show"

  resources :games, only: [:create,:update]
  resources :characters, only: [:index]
  resources :photos, only: [:show]
  resources :tags, only: [:create]
end
