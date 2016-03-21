class PhotosController < ApplicationController

  def show
    # hard-coded to the first for now
    # may be more photos later
    @photo = Photo.find(1)
  end
end
