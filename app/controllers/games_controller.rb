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
    end
  end

  def update
    @game = Game.find(params[:id])

    if @game.update(game_params)
      flash[:success] = "Game complete!"

      respond_to do |format|

        format.html

        format.json { render  json: @game,
                              status: :updated }

      end
    else
      flash[:danger] = "Could not end the game!"
    end

  end

  private

  def game_params
    params.require(:game).permit(:end_time)
  end

end
