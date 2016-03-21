class GamesController < ApplicationController

  def create
    @game = Game.new
    if @game.save
      flash[:success] = "Created a new game!"

      respond_to do |format|

        format.html

        format.json { render  json: @game,
                              status: :created }

      end
    else
      flash[:danger] = "Could not create a game!"

      respond_to do |format|

        format.html

        format.json { render  nothing: true,
                              status: 400 }

      end
    end
  end

  def update
    @game = Game.find(params[:id])
    @game.end_time = Time.now;

    if @game.update(game_params)
      flash[:success] = "Game complete!"

      respond_to do |format|

        format.html

        format.json { render  json: @game,
                              status: :updated }

      end
    else
      flash[:danger] = "Could not end the game!"

      respond_to do |format|

        format.html

        format.json { render  nothing: true,
                              status: 400 }

      end
    end

  end

end
